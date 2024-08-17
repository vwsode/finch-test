const API_URI = 'https://jsonplaceholder.typicode.com/';

type DataType = {
  selectedNumber: {
    [fieldName: string]: number[];
  };
  isTicketWon: boolean;
};

/**
 *
 */
export const sendSelectedNumbers = async (data: DataType, maxRetries: number = 3): Promise<void> => {
  const attemptRequest = async (attempt: number): Promise<Response> => {
    const response = await fetch(API_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok && attempt < maxRetries) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return attemptRequest(attempt + 1);
    }

    return response;
  };

  const finalResponse = await attemptRequest(1);

  if (!finalResponse.ok) {
    throw new Error('Ошибка: не удалось отправить данные на сервер.');
  }
};
