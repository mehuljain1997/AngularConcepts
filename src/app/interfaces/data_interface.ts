export interface todosData  {
id: number,
userId: number,
// title: string
}

export interface UserData {
   id: number,
   name: string,
   phone: string,
   username: number,
   email: string,
   website: string,
   company: {
       name: string
   }
}