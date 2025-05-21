import { connect } from "react-redux";
import { useEffect } from "react";
import { getUserThunk } from "../../store/slices/userSlice";
import styles from './Header.module.sass';

function Header({user, isFetching, error, getUser}) {
    useEffect(() => {
        getUser()
    }, [])

  return (
    <>
        {isFetching && <span className={styles.spanMessage}>Is Loading...</span>}
        {error && <span className={styles.spanMessage}>Error loading data!</span>}
        {!isFetching && !error && Array.isArray(user) && <>{user.map(u =><div className={styles.header} key={u.login.uuid}><img src={u.picture.medium} alt={u.name.first}/> <div className={styles.userInfo}>{`${u.name.first} ${u.name.last}`}</div></div>)}</>}
    </>
  )
}

const mapStateToProps = state => state.userInfo;

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getUserThunk()),
})

export default connect (mapStateToProps, mapDispatchToProps) (Header);