
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { increment, decrement, incrementByAmount, reset } from '@/store/slices/counterSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const handleIncrementAmount = () => {
    dispatch(incrementByAmount(Number(incrementAmount) || 0));
  };

  return (
    <Card className="card-gradient shadow-lg w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Redux Counter
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-6">
          <div className="text-6xl font-bold py-4">{count}</div>
          
          <div className="flex gap-3 w-full">
            <Button 
              className="btn-gradient flex-1" 
              onClick={() => dispatch(decrement())}
              data-testid="decrement-button"
            >
              -
            </Button>
            <Button 
              className="btn-gradient flex-1" 
              onClick={() => dispatch(increment())}
              data-testid="increment-button"
            >
              +
            </Button>
          </div>
          
          <div className="flex gap-3 w-full items-center">
            <Input
              className="flex-1"
              aria-label="Set increment amount"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
              type="number"
              data-testid="increment-input"
            />
            <Button 
              className="bg-accent hover:bg-accent/90" 
              onClick={handleIncrementAmount}
              data-testid="add-amount-button"
            >
              Add Amount
            </Button>
          </div>
          
          <Button 
            className="bg-destructive hover:bg-destructive/90 w-full" 
            onClick={() => dispatch(reset())}
            data-testid="reset-button"
          >
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Counter;
