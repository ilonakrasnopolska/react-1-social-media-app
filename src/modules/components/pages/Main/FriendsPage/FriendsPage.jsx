import { useSelector } from "react-redux";

const FriendsPage = ({ t }) => {
  const friends = useSelector((state) => state.sidebar.friends) || [];
  return (
    <section className='friend section'>
     <h2>Friend</h2>
    </section>
  );
};

export default FriendsPage;
