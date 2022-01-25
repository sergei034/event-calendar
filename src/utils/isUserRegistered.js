export const isUserRegistered = (userData, userList) =>
  Boolean(
    userList.find(
      user =>
        user.username === userData.username &&
        user.password === userData.password,
    ),
  );
