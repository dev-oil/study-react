import { useState } from 'react';

type RequestState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: string }
  | { status: 'error'; error: Error };

export const TSuseState = () => {
  const [requestState, setRequestState] = useState<RequestState>({
    status: 'idle',
  });

  return <div className='section'>TSuseState</div>;
};
