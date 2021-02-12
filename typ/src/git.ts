import * as request from 'request'
export class git
{
 getuserinfo(username: string){
     let options: any={
         headers: {
             'User-Agent': 'request'
         }
     }
     request.get('https://api.github.com/users/'+username,(response:any)=>{})
     console.log(Response);
 }
}