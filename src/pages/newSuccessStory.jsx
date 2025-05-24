import { useState } from 'react';

const SuccessStory = ({ 
  location = 'Kothi', 
  organizationName = 'Integrity Foundation', 
  studentName = 'Priyanka',
  teacherName = 'Priya Kardak',
  leftColumnContent,
  rightColumnContent,
  quoteText = "Our dreams were beyond our reach since none of us could afford to pay for any kind of Training and Classes. Integrity Foundation has given us an opportunity of a lifetime",
  bottomContent
}) => {
  // Extract first name safely
  const firstName = studentName && studentName.includes(' ') 
    ? studentName.split(' ')[0] 
    : studentName || 'students';

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="text-gray-800">
          <p className="leading-relaxed">
            <span className="text-amber-800 font-medium">In the tiny locality of </span>
            <span className="text-amber-800 font-medium">{location}</span>
            <span className="text-amber-800 font-medium"> in Aurnagabad, a glimmer of hope shone brightly in the form of the </span>
            <span className="text-red-800 font-medium">Integrity Foundation</span>
            <span className="text-amber-800 font-medium">. For many underprivileged individuals like </span>
            <span className="text-green-800 font-medium">Priyanka</span>
            <span className="text-amber-800 font-medium"> and her fellow learners, the foundation was a beacon of light, offering opportunities that seemed beyond their reach. Recently, the foundation initiated a tailoring class, and for </span>
            <span className="text-amber-800 font-medium">Priya</span>
            <span className="text-amber-800 font-medium"> and her friends, it was nothing short of a </span>
            <span className="text-amber-800 font-medium">life-changing experience.</span>
          </p>
        </div>
        
        {/* Right Column */}
        <div className="text-gray-800">
          <p className="leading-relaxed">
            <span className="text-amber-800 font-medium">With gratitude in their hearts, the students at the class expressed their thankfulness to </span>
            <span className="text-amber-800 font-medium">Integrity Foundation</span>
            <span className="text-amber-800 font-medium"> for giving them a chance to learn tailoring, a skill that might shape their future. They knew that they wouldn't have been able to afford such classes elsewhere, but at </span>
            <span className="text-amber-800 font-medium">{location}'s</span>
            <span className="text-amber-800 font-medium"> tailoring class, they could learn and grow </span>
            <span className="text-amber-800 font-medium">without worry</span>
            <span className="text-amber-800 font-medium">. Now they have a skill that can help them change their future.</span>
          </p>
        </div>
      </div>
      
      {/* Quote Section */}
      <div className="my-8 relative text-center px-6">
        <div className="text-pink-300 text-6xl font-serif absolute -top-6 left-6">"</div>
        <div className="italic text-center text-lg font-medium text-red-900 px-8 py-2 mx-6">
          {quoteText}
        </div>
        <div className="text-pink-300 text-6xl font-serif absolute -bottom-6 right-6">"</div>
      </div>
      
      {/* Teacher Info - Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="text-gray-800">
          <p className="leading-relaxed">
            <span className="text-red-800 font-medium">Priya Kardak</span>
            <span className="text-amber-800 font-medium">, the skilled and compassionate teacher leading the class, brought with her a wealth of knowledge and a heart full of dedication. She took up the mantle of empowering these young minds to embrace the art of tailoring and break free from the shackles of financial constraints that once held them back.</span>
          </p>
        </div>
        
        {/* Right Column */}
        <div className="text-gray-800">
          <p className="leading-relaxed">
            <span className="text-amber-800 font-medium">Under </span>
            <span className="text-amber-800 font-medium">Priya Kardak's</span>
            <span className="text-amber-800 font-medium"> guidance, the students embarked on their creative journey, learning the craft from the very basics. They learned how to wield a needle and thread, the essence of every master </span>
            <span className="text-amber-800 font-medium">tailor</span>
            <span className="text-amber-800 font-medium">. As weeks turned into months, they progressed from novice to confident seamstresses, deftly stitching fabrics into beautiful garments.</span>
          </p>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="mt-6 text-amber-800">
        <p className="leading-relaxed">
          The little tailoring class at {location} had become a sanctuary for dreams. It symbolized the power of education and compassion, reminding the students that they were not bound by their circumstances. It was a reminder that talent and skill were not confined by social or economic backgrounds, and that with the right support and guidance, they could conquer any challenge.
        </p>
      </div>
    </div>
  );
};

export default SuccessStory;