export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/moniskhan01");
  return response.json();
};
