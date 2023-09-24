type Propstypes = {
  children: React.ReactNode;
};

const Oscar = (props: Propstypes) => {
  return <div>{props.children}</div>;
};

export default Oscar;
