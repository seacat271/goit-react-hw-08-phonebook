import { Box, Typography, Container } from '@mui/material';
import { IForm } from 'components/Form/IForm';
import PropTypes from 'prop-types'

const RegisterView = () => {
  return (
    <Container
    sx={{
      height: '92vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      p: 2,
      gap: '20px',
    }}
    >
      <Box component="div"
      sx={{
        width: '33%',
        height: '70%',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        gap: '20px',
        borderRadius: "4px",
      }}>
        <Typography variant="h4">Registration page</Typography>

        <IForm buttonText={'Registration'} />
      </Box>
    </Container>
  );
};

export default RegisterView;

RegisterView.propTypes = {
  buttonText: PropTypes.string.isRequired,
}
