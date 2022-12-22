import React from 'react';
import Auth from '../authentication/Auth';

export interface CodeProps {
  code: string|null
  
}

const Dashboard: React.FC<CodeProps> = ({code}) => {
  const accessToken = Auth(code)

  return (
    <div>
      {code}
    </div>
  )
}

export default Dashboard