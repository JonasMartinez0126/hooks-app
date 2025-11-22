export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  await new Promise((res) => setTimeout(res, 2000));

  return {
    id,
    name: "Jonas Martinez",
    location: "Ottawa, Canada",
    role: "Estudiante de Software",
  };
};
