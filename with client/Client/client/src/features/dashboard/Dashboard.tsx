import React from 'react';
import Auth from '../authentication/Auth';

export interface Code {
  code: string
}

const Dashboard: React.FC<Code> = (code:any) => {
  const accessToken = Auth(code)
  return (
    <div>
      {`code`}
    </div>
  )
}

export default Dashboard