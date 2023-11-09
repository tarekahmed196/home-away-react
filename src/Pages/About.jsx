import about1 from '../../public/about1.jpg'
import about2 from '../../public/about2.jpg'


const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
            <img
              src={about1}
              className="w-3/4 h-96 rounded-lg shadow-2xl"
            />
            <img
              src={about2}
              className="w-1/2 absolute right-5 border-white border-8 top-1/2 rounded-lg shadow-2xl"
            />
        </div>
        <div className='lg:w-1/2 space-y-5 p-4'>
            <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="py-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
