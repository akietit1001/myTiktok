import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/dc60cb071cfa78089851f938d59db628~c5_300x300.webp?x-expires=1661014800&x-signature=ZN%2FcZg3WYv%2FKbQRTF2Ya2W8iY0M%3D"
        alt=""
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <span className={cx('check')}>
            <ion-icon name="checkmark-circle" title=""></ion-icon>
          </span>
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
