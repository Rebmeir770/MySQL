import React from 'react';
import Auth from '../authentication/Auth';




export interface CodeProps {
  code: any
  
}

const Dashboard: React.FC<CodeProps> = (code:any) => {
  const accessToken = Auth(code)

  return (
    <div>
      {code?code:null}
    </div>
  )
}

export default Dashboard