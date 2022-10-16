import { ThreeDots } from  'react-loader-spinner'

export const Loader = () => {
return (<ThreeDots 
  height="80" 
  width="80" 
  radius="9"
  color="#1976d2" 
  ariaLabel="three-dots-loading"
  wrapperStyle={{position: "absolute", top: "65px", right: "50%"}}
  wrapperClassName=""
  visible={true}
  position="absolute"
   />)
} 


