import team1Image from "../../assets/images/teams/team1.png";
import team2Image from "../../assets/images/teams/team2.png";
import team3Image from "../../assets/images/teams/team3.png";
import team4Image from "../../assets/images/teams/team4.png";
import team5Image from "../../assets/images/teams/team5.png";
import team6Image from "../../assets/images/teams/team6.png";
import teamInfoImage from "../../assets/images/teams/teamInfo.png";
const TeamDiv = () => {
    const teamClass: string = 'w-174 border border-4 border-white rounded-12 hover:border-seletiveyellow';
    return (
        <div className="lg:w-936 max-w-936 md:mx-auto msm:mx-10 msm:mt-80p">
            <p className="text-64 text-seletiveyellow font-bold text-Rajdhani">TEAM</p>
            <div className="flex">
                <div className="grid grid-cols-3 mr-10 md:h-372 msm:h-60">
                    <img src={team1Image} className={teamClass} key='1'/>
                    <img src={team2Image} className={teamClass} key='2' />
                    <img src={team3Image} className={teamClass} key='3' />
                    <img src={team4Image} className={teamClass} key='4' />
                    <img src={team5Image} className={teamClass} key='5' />
                    <img src={team6Image} className={teamClass} key='6' />
                </div>
                <div className="w-372" >
                    <img src={teamInfoImage} className="w-372 md:h-372"/>
                    <p className="text-25 leading-32 tracking-15p font-medium text-davygrey font-Rajdhani">PIYADA TIM</p>
                    <p className="text-17 leading-21 tracking-2p font-medium text-cloudygrey font-Rajdhani">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
            </div>
        </div>
    );
}

export default TeamDiv;