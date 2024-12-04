import './App.css';
import Profile from './components/Profile';
import Avartar from './components/Avartar';

function AppProfile() {
  return (
    <>
      <Profile
        image='https://cdn.pixabay.com/photo/2023/02/24/09/35/ai-generated-7810589_1280.jpg'
        name='Alice'
        title='weird traveler'
        isNew={true}
      />
      <Profile
        image='https://cdn.pixabay.com/photo/2024/11/02/20/36/ai-generated-9170047_1280.jpg'
        name='Luna'
        title='magician'
      />
      <Profile
        image='https://cdn.pixabay.com/photo/2024/11/02/20/32/ai-generated-9170042_960_720.jpg'
        name='Purin'
        title='fairy'
      />
    </>
  );
}

export default AppProfile;
