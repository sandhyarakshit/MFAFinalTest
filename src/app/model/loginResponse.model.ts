export interface LoginResponse
{
  status: string,
  SessionToken : string,
  embedded : EmbeddedData
}
export interface EmbeddedData
{
   user : UserDetail
}
export interface UserDetail
{
  id : string
}
