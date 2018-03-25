import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const MemberList = (props) => (
    <Layout>        
        <h3>Our Members</h3>
        <p>Here are a few randomly chosen (and fictional) members.</p>

        <ul className="collection">

            {props.members.map((member) => (
                <li className="collection-item" key={member.login.username}>
                <img src={member.picture.thumbnail} alt={member.login.username} />
                    {member.login.username}          
                </li>
            ))}

        </ul>

        <style jsx>{`
            li {
                vertical-align:top;                
            }
            img {
                vertical-align:top;                
                margin-right: 10px;
            }
        `}</style>

    </Layout>
);

MemberList.getInitialProps = async function() {
    const res = await fetch('https://randomuser.me/api/?results=5');
    const data = await res.json();
  
    //console.log(`Member data fetched. Count: ${data.results.length}`);
    //console.log(data.results);

    return {
      members: data.results
    };
};

export default MemberList;