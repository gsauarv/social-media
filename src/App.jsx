import { LoginSocialFacebook } from "reactjs-social-login";

function App() {


  const onResolve = (data) => {
   
    console.log({data})
  };
  return (
    <>
      
      <LoginSocialFacebook
                
                appId="965606961836993"
                redirect_uri="http://localhost:3000"
                fieldsProfile={
                  "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                }
                scope="pages_manage_posts,pages_read_engagement,pages_show_list,instagram_basic,instagram_content_publish"
                onResolve={onResolve}
                onReject={(err) => {
                  console.log(err);
                }}
              >
               <button>Hello</button>
            
              </LoginSocialFacebook>

    </>
  )
}

export default App
