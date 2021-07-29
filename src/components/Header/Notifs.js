import React from "react";
import moment from "moment";
import MenuItem from "./MenuItem";
import styles from "./Header.module.scss";

const I18N = {
  en: {
    nothingToShow: "Nothing to show",
    notificationsOfUpdates: "Notifications of updates",
    manage: "Manage",
  },
  fr: {
    nothingToShow: "Aucunes notification n'est diponible",
    notificationsOfUpdates: "Notifications de mises à jour",
    manage: "Gérer",
  },
  nl: {
    nothingToShow: "Niets om te laten zien'",
    notificationsOfUpdates: "Meldingen van updates",
    manage: "Beheren",
  },
};

export default function Notifs({
  notifications,
  lng,
  auth,
  handleOnClick,
  handleEditClick,
  rightIcon,
}) {
  const isAdmin = auth && auth.user?.type === "ADMIN" ? true : false;
  const renderNotifications = () => {
    const subject = `subject${lng.charAt(0).toUpperCase() + lng.slice(1)}`;
    if (notifications.length === 0) {
      return <li className="p-b-m">{I18N[lng]["nothingToShow"]}</li>;
    }

    moment.locale(lng);
    return notifications.map((notification) => {
      const createdAtDate = moment(notification.createdAt);
      const text =
        moment().diff(createdAtDate, "month", true) > 1
          ? createdAtDate.format("DD MMM YYYY")
          : createdAtDate.fromNow();

      return (
        <li
          key={notification.id}
          className={notification.status === "UNREAD" ? "" : styles.notRead}
        >
          <a
            href={notification.url || null}
            onClick={() => handleOnClick(notification.id)}
          >
            <div>{notification[subject]}</div>
            <div className={styles.infos}>{text}</div>
          </a>
        </li>
      );
    });
  };

  const unreadNotifs = notifications.filter(
    (notif) => notif.status === "UNREAD"
  );

  return (
    <MenuItem
      icon={rightIcon.icon}
      className={styles.notif}
      count={unreadNotifs.length}
    >
      <div className={styles.socialLinksWrapper}>
        <div
          className={`${styles.socialLinksHeader} ${
            isAdmin ? styles.socialLinksHeader_admin : ""
          }`}
        >
          {I18N[lng]["notificationsOfUpdates"]}
          {isAdmin && (
            <span
              className={styles.socialLinksHeader_edit}
              onClick={() => handleEditClick()}
            >
              {I18N[lng]["manage"]}
            </span>
          )}
        </div>
        <div className={styles.socialLinksBody}>
          <ul className={styles.subMenuDropdown}>{renderNotifications()}</ul>
        </div>
      </div>
    </MenuItem>
  );
}
