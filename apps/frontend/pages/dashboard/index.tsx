import React from 'react';

const Dashboard = ({ cData }) => {
  return (
    <div>
      {' '}
      Dashboard
      <div>{JSON.stringify(cData)}</div>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log({ context });
  let cData = context.req.cookies.auth;
  console.log({ cData });

  return {
    props: {
      cData,
    }, // will be passed to the page component as props
  };
}

export default Dashboard;
