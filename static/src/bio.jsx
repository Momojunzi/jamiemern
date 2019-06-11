import React from 'react';

export default class BioSection extends React.Component {
    render(){
        return(
            <div>
                <div className="col-xs-12">
                    <h3>Dr Hampton</h3>
                    <img className="img-responsive staff-img" src="images/dr-jamie-hampton2.jpg" />
                </div>

                <div className="col-xs-12"><hr/></div>

                <div className="col-xs-12">
                    <p className="article-text">Dr. Hampton specializes in Myofascial Trigger Point Acupuncture (Dry Needling) for complex orthopedic issues
                        including Pelvic Floor Acupuncture. She is the bay area’s leading expert in acupuncture care for Pelvic Floor
                        pain.
                    </p>
                    <p className="article-text">She is a passionate advocate for the use of Chinese Medicine and acupuncture as a preventative method to achieve
                        and maintain ongoing health and wellness.
                    </p>
                    <p className="article-text">Dr. Hampton’s goal is to help her patients live a full and healthy life. She believes in the power of Traditional
                        Chinese Medicine, positive thinking, and happiness. She lives in beautiful North Berkeley, California with her
                        husband and son. She enjoys travel, reading, cooking, fine dining, and learning foreign languages, and she thinks
                        that every day is a blessing.
                    </p>
                </div>
                <div className="col-xs-12"><hr/></div>
                <div className="col-xs-12">
                    <h4 className="headline">Education and Training</h4>

                    <ul className="article-list">
                        <li className="article-text">Doctorate Degree in Acupuncture and Oriental Medicine, American College of Traditional Chinese Medicine (ACTCM),
                            emphasis on Women’s Primary Care and Pain Management.
                        </li>
                        <li className="article-text">Master of Sciences in Chinese Medicine, ACTCM.</li>
                        <li className="article-text">Bachelor of Arts in Anthropology, University of Cincinnati.</li>
                        <li className="article-text">Residency in Gynecology and Pain Management at Yue Yang Hospital in Shanghai, China.</li>
                        <li className="article-text">Research at Brigham and Women’s Hospital in Boston, Massachusetts working with a cardiology team on an NIH
                            funded clinical trial.
                        </li>
                        <li className="article-text">Internships with California Pacific Medical Center, Haight Ashbury Free Clinic, The Women’s Community Clinic,
                            San Francisco.
                        </li>
                        <li className="article-text">Faculty at Alameda County Health Services (Highland Hospital, University of California San Francisco Teaching
                            affiliate).
                        </li>
                        <li className="article-text">Faculty at Acupuncture and Integrative Medical College (AIMC) Berkeley, CA.</li>
                    </ul>
                </div>
                <div className="col-xs-12"><hr/></div>
                <div className="col-xs-12">
                    <p className="article-text">Dr. Hampton is a licensed Acupuncturist in California and a Diplomate of Oriental Medicine through the National
                        Certification Commission for Acupuncture and Oriental Medicine (NCCAOM).
                    </p>
                </div>
            </div>
        )
    }
}