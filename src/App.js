import react, {useState, useEffect} from 'react';
import './App.css';
import { db, auth } from './firebase.js';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import Scrollphoto from './Scrollphoto';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [user,setUser] = useState(null);
  const [openSignIn, setOpenSignIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
        if (authUser){
          console.log(authUser);
          setUser(authUser)
        }else{
          setUser(null)
        }
    })
    return () => {
      unsubscribe();
    }
  }, [user, username]);
  useEffect(() => {
    db.collection('post').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()}
      )));
    })
  }, []);
  const signUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, Password)
    .then((authUser)=>{
      return authUser.user.updateProfile({
        displayName: username,
      });
    })
    .catch((error) => alert(error.message))
    setOpen(false)
  }

  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, Password)
    .catch((error) => alert(error.message))
    setOpenSignIn(false)
  }
  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      > 
        <div style={modalStyle} className={classes.paper}>
          <form className='app__signUp'>
            <center>
              <img className='app__headerImage'
              src="dog.png"
              alt="SIGN UP PAGE"/>
            </center>
              <Input className='app__input'
              placeholder='Username'
              type="text"
              value={username}
              onChange = {(e) => setUsername(e.target.value)}
              />
              <Input className='app__input'
              placeholder='Email'
              type="text"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
              />
              <Input className='app__input'
              placeholder='Password'
              type="password"
              value={Password}
              onChange = {(e) => setPassword(e.target.value)}
              />
              <Button onClick={signUp}>Sign Up</Button>
          </form>
          
        </div>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      > 
        <div style={modalStyle} className={classes.paper}>
          <form className='app__signUp'>
            <center>
              <img className='app__headerImage'
              src="dog.png"
              alt="SIGN IN PAGE"/>
            </center>
              <Input className='app__input'
              placeholder='Email'
              type="text"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
              />
              <Input className='app__input'
              placeholder='Password'
              type="password"
              value={Password}
              onChange = {(e) => setPassword(e.target.value)}
              />
              <Button onClick={signIn}>Sign In</Button>
          </form>
          
        </div>
      </Modal>

      <div className="app__header">
        <img className='app__headerImage'
        src="data:image/jpeg;base64,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"
        alt="Shaadi"/>
        {user? (<Button onClick={() => auth.signOut()}>Log Out</Button> ):(
       <div>
          <Button onClick={() => setOpenSignIn(true)}>Sign In</Button> 
          <Button onClick={() => setOpen(true)}>Sign Up</Button> 
       </div>
      )}
      </div>
      
      {user?.displayName? (<Scrollphoto />)
      :(<h3>Sorry! Please login to See Photos</h3>)}
    </div>

  );
}

export default App;
