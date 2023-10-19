import styles from "./ActiveDonations.module.css";
import DonationCard from "./DonationCard";
import { donation } from "./types";

const ActiveDonations = () => {
  const mockedDonationData: donation[] = [
    {
      name: "Nadační fond psí duše",
      raised: 15845,
      raisedToday: 2020,
    },
  ];

  return (
    <div>
      <h2 className={styles.header}>Aktivní sbírky:</h2>
      {mockedDonationData.map((donation: donation) => (
        <DonationCard data={donation} />
      ))}
    </div>
  );
};

export default ActiveDonations;
