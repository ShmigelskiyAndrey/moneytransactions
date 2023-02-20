import { Section } from "../components/Section/Section";
import { Card } from "../components/Card/Card";
import { ZkAPI } from "../api/ZkAPI";
import { useFetch } from "../hooks/useFetch";

export default function Zk() {
  const { data: dataUSD, pending: pendingUSD } = useFetch(
    ZkAPI.getCurrencyUrl("GEO", "810", "840")
  );

  return (
    <Section title={"Zk"}>
      <Card
        value={dataUSD && dataUSD[0]?.exchangeRate}
        pending={pendingUSD}
        currencyName={"$"}
      />
      <Card />
    </Section>
  );
}
