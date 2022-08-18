import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={cx('clear')}>{<ion-icon name="close-circle"></ion-icon>}</button>
          <span className={cx('loading')}>{<ion-icon name="sync-outline"></ion-icon>}</span>
          <button className={cx('search-btn')}>{<ion-icon name="search-outline"></ion-icon>}</button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
