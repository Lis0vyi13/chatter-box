const getInitials = (name: string) => {
  return name?.split(" ").reduce((acum, curr) => (acum += curr[0]), "");
};

export default getInitials;
