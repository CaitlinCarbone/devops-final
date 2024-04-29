
import map from './assets/map.png';

const FAQPage = () => {
    return (
        // <p>hello worlwd!</p>
        // all information is taken from the Stevens Webpage. 
        // acoordion code helped from the bootstrap webpage.


        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Move In Dates
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Move-in takes place on <strong>August 22</strong> for Pre-Orientation participants and International students, and on <strong>August 25</strong> for all new students. Student-athletes who are in-season in the fall arrive early on <strong>August 15</strong>.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header"> 
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What Are Peer Leaders
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Peer Leaders (PLs) are current undergraduate students who are committed to supporting new students as they transition to college. They embody a unique sense of pride for the Stevens community. PLs provide mentorship and guidance to you during New Student Orientation and throughout the fall semester. In addition, PLs support first-year students with the necessary resources to successfully acclimate to the Stevens community.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How to Navigate Campus
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <img src={map} className='map' alt="map" />
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    When Is Orientation
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    All incoming students must participate in all aspects of New Student Orientation from August 27-31, 2023.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    What majors and minors are offered at Stevens?
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    The possibilities here at Stevens are limit-less. Stevens offers tons of majors and minors, as well as masters. You can search for your perfect program here:
                    <a href="https://www.stevens.edu/academics/program-finder?keyword=">Program-Finder</a>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    How do I register for classes?
                </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    You will register for courses through Workday. 
                    <a href="https://www.stevens.edu/page-chapter/registration-procedures">Learn to Register for Courses</a>                
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    What is a difference between a drop and a withdrawal? Does a withdrawal affect my GPA?
                </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    When a course is dropped, it disappears from the records. When a student withdraws from a course, a grade of W is recorded for that course. The grade of W does not affect the students graduating GPA.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    What health services are provided on campus?  
                </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Student Health Services offers diagnosis and treatment of episodic and acute medical illnesses, pre-college entrance and travel physicals, prescription refills (including oral contraception and PrEP), laboratory testing on site and through Lab Corp (including bloodwork), immunizations, STI testing and treatment, pregnancy testing, and first aid.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                    What clubs and organizations are available on campus?
                </button>
                </h2>
                <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    There are more than 120 student clubs and organizations at Steves. Feel free to go to your ducklink account to search and find clubs that may interest you! There you can also see where they meet and if there are any upcoming meetings for various clubs. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                    Are there career services to help with internships and job placements?
                </button>
                </h2>
                <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                The Stevens Career Center hosts employer recruiting events and career education programming throughout the year. Our team of dedicated professionals excel at introducing students to a range of opportunities that help students obtain their post-graduation career goals. They will help you look over your resume, and give youthe best tips and tricks to landing a job or internship. The Stevens Career Center is located on the 6th Floor of the Howe Center. Office hours are Monday through Friday from 9 am to 5 pm. Please contact us via email at careercenter@stevens.edu or via phone at (201) 216-5166.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                    What is Co-op?
                </button>
                </h2>
                <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                The Stevens Cooperative Education Program for Undergraduate Students is a five-year, competitive program that combines classroom education with practical real-world work experience. A co-op experience allows students to alternate semesters of academic study with semesters of full-time paid professional work in a job related to the student’s academic program of study. Learn more here: 
                <a href="https://www.stevens.edu/career-center/stevens-cooperative-education">Co-op information</a> 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                    What is AMP?
                </button>
                </h2>
                <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                The Accelerated Master’s Program (AMP) enables high-achieving students to begin earning credits toward a graduate degree during their undergraduate studies, enabling them to earn a master’s degree at an accelerated pace.
                Learn more here:  
                <a href="https://www.stevens.edu/accelerated-masters-program">AMP Information</a> 
                </div>
                </div>
            </div>
        </div>

    );
}

export default FAQPage;
