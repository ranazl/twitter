import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
  root: {
    backgroundColor:'white',
    width:'18%',
  },
  logoType:{
    fontSize: '1.25rem !important',
    fontWeight:'600 !important',
    marginRight:'1rem',
    color:theme.palette.primary.main
  },
  hashtagTitle:{
    marginRight:'0.5rem',
    fontSize:'1.1rem !important',
    fontWeight:'600 !important',
    marginTop:'3rem',
    marginBottom:'1.5rem'
  },
  hashtag:{
    marginRight:'0.8rem'
  },
  hashtagParent:{
    marginRight:'0.5rem',
    marginBottom:'0.5rem !important',
    padding:'0.15rem !important',
    width:'100%'
  }
}));

export default useStyles;