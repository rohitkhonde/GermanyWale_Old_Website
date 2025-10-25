import React, { useState } from 'react';
import Hero from '../component/Europewale_Landing_Page/Hero/Hero';
import Testimonial from '../component/Europewale_Landing_Page/Hero/Testimonial/Testimonial';
import Services from '../component/Europewale_Landing_Page/Hero/Services/Services';
import UniversityScrolling from '../component/Europewale_Landing_Page/Hero/TopUniversityScrolling/UniversityScrolling';
import Partners from '../component/Europewale_Landing_Page/Hero/Partners/Partners';
import App from '../component/Europewale_Landing_Page/Hero/Review/Review';
import News from '../component/News';
import SignUpForm from '../component/Europewale_Landing_Page/Hero/Form';

const EuropewaleLandingPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookCallClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="relative">
      <Hero onBookCallClick={handleBookCallClick} />
      <UniversityScrolling/>
      <Testimonial/>
      <Services/>
      <Partners/>
      <App/>
      <News/>

      {/* Form Modal */}
      {showForm && <SignUpForm onClose={handleCloseForm} />}
    </div>
  )
}

export default EuropewaleLandingPage;