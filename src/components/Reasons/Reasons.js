import сonversation from '../../images/сonversation.jpg'
import education from '../../images/education.png'
import culture from '../../images/culture.jpg'
import economy from '../../images/economy.jfif'
import inventor from '../../images/inventor.jpg'
import travel from '../../images/travel.jpg'
import business from '../../images/business.jfif'
import exchanges from '../../images/exchanges.jfif'

function Reasons() {


    return (
        <section className="reasons">
            <h2 className='reasons__title'>8 причин изучать немецкий язык</h2>
            <div className="reasons__containers">
                <div className="reasons__container">
                    <img className="reasons__image" src={сonversation} alt="Общение и взаимосвязь." />
                    <p className="reasons__subtitle">Немецкий на втором месте по популярности в Европе.</p>
                </div>
                <div className="reasons__container">
                    <img className="reasons__image" src={education} alt="Образование." />
                    <p className="reasons__subtitle">Бесплатное образование.</p>
                </div>
                <div className="reasons__container">
                    <img className="reasons__image" src={culture} alt="Культура и искусство." />
                    <p className="reasons__subtitle">Культура и искусство немецкоговорящих стран.</p>
                </div>
                <div className="reasons__container">
                    <img className="reasons__image" src={economy} alt="Экономика." />
                    <p className="reasons__subtitle">Немецкая экономика очень конкурентоспособна.</p>
                </div>
                <div className="reasons__container">
                    <img className="reasons__image" src={inventor} alt="Изобретатели." />
                    <p className="reasons__subtitle">Немецкий — язык изобретателей и инноваторов.</p>
                </div>
                <div className="reasons__container">
                    <img className="reasons__image" src={travel} alt="Путешествия." />
                    <p className="reasons__subtitle">Немцы тратят очень много денег на путешествия.</p>
                </div>
                <div className="reasons__container">
                    <img className="reasons__image" src={business} alt="Бизнес." />
                    <p className="reasons__subtitle">Знание немецкого языка дает возможность ведения бизнеса.</p>
                </div>
                <div className="reasons__container">
                    <img className="reasons__image" src={exchanges} alt="Обмены." />
                    <p className="reasons__subtitle">Германия спонсирует международные академические обмены.</p>
                </div>
            </div>
        </section>
    );
}

export default Reasons;