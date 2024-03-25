import {Alert, Label, Spinner, TextInput} from 'flowbite-react';
import {Link,useNavigate} from 'react-router-dom';
import { Button } from 'flowbite-react';
import { useState } from 'react';

export default function SignUp() {
  const[formData, setFormData] = useState({});
  const[errorMessage,setErrorMessage] = useState(null);
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value.trim()});
  };

  console.log(formData);
  const handleSubmit =async(e) => {
     e.preventDefault();
     if(!formData.email || !formData.password || !formData.username){
       setErrorMessage('All fields are required');
     }
     try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      //duplicate key error collection:
      if(data.success == false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      //if response is ok navigate to the signin page
      if(res.ok){
        navigate('/signin');
      }

     
  }catch (error)    
  { /* empty */ }
  };
    return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row  md:items-center gap-5'>
        {/* left */}
      
          <div className='flex-1'>

          <Link
          to='/'
          //responsive
          className='font-bold dark:text-white text-4xl'
        >
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Asela's
          </span>
          Blog
        </Link>

        <p className='text-sm mt-5'>
          This is a demo project.You can sign up with any email and password or google.
        </p>
            
          </div>
        
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value = 'Your username' />
              <TextInput
                type='text' 
                placeholder='Username' name='username'
                id='username' onChange={handleChange}/>

            </div>

            <div>
              <Label value = 'Your email' />
              <TextInput
                type='text'
                placeholder='name@company.com' name='email'
        
                id='email' onChange={handleChange}

               />

            </div>


            <div>
              <Label value = 'Your Password' />
              <TextInput
                type='password'
                placeholder='password' name='password'
                id='username'  onChange={handleChange} />

            </div>
            <Button gradientDuoTones='purpleToPink' type='submit' rounded='full' w='full' disabled={loading}>
             {
              loading ? (
                <>
                <Spinner size = 'sm' />
                <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
             )}
              </Button>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
    
              <Link to='/signin' className='text-blue-500 hover:underline'>Sign In</Link> 
             
            </div>

            <div>
                {
                  errorMessage&&(
                    <Alert className='mt-5' color='failure'>
                      {errorMessage}
                    </Alert>
                  )
                }
              </div>

          </form>
        </div>
      </div>
    </div>

    );
}


