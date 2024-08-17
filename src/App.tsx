import { FC, useState } from 'react';

import { sendSelectedNumbers } from './api/gameApi';
import { GlobalStyles } from './components/GlobalStyles';
import { Paper } from './components/Paper';
import { useGame } from './hooks';
import { Game } from './screens/Game';
import { Result } from './screens/Result';

const GAME_OPTIONS = {
  fields: [
    { label: 'Поле 1', count: 19, minSelection: 8, maxSelection: 8, name: 'firstNumber' },
    { label: 'Поле 2', count: 2, minSelection: 1, maxSelection: 1, name: 'secondNumber' },
    { label: 'Поле 3', count: 45, minSelection: 2, maxSelection: 20, name: 'thirdNumber' },
  ],
  winningConditions: [
    // Rule 1.
    {
      firstNumber: {
        minCount: 4,
      },
      secondNumber: {
        minCount: 0,
      },
    },
    // Rule 2.
    {
      firstNumber: {
        minCount: 3,
      },
      secondNumber: {
        minCount: 1,
      },
    },
  ],
};

export const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { isWin, selectedNumber, handleSelect, handleRandomize, handleShowResult, error } = useGame({
    fields: GAME_OPTIONS.fields,
    winningConditions: GAME_OPTIONS.winningConditions,
    onWin: async (isTicketWon: boolean) => {
      setLoading(true);
      return sendSelectedNumbers({
        selectedNumber,
        isTicketWon,
      }).finally(() => {
        setLoading(false);
      });
    },
  });

  return (
    <GlobalStyles>
      <Paper>
        {!isWin ? (
          <Game
            error={error}
            isLoading={loading}
            fields={GAME_OPTIONS.fields}
            selectedNumber={selectedNumber}
            onSelect={handleSelect}
            onShowResult={handleShowResult}
            onRandomize={handleRandomize}
            title="Билет 1"
          />
        ) : (
          <Result />
        )}
      </Paper>
    </GlobalStyles>
  );
};

App.displayName = 'App';
