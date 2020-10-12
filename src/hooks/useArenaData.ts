import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Alignment, PowerStatsAPI } from '~app/types/response';
import useHeroStore, { selectArenaPlayers } from './useHeroStore';

type ArenaData = {
  name: string;
  alignment: Alignment;
  powers: PowerStatsAPI;
  avatar: string;
};

const useArenaData = () => {
  const { slug } = useParams();
  const [playerIds] = useState(
    (slug as string).split('v').map((id) => parseInt(id, 10)),
  );

  const arenaPlayers = useHeroStore(selectArenaPlayers);
  const [arenaData, setArenaData] = useState<ArenaData[] | undefined>();

  useEffect(() => {
    if (arenaPlayers) {
      const playersData = arenaPlayers.map((player) => ({
        name: player.name,
        alignment: player.biography.alignment,
        powers: player.powerstats,
        avatar: player.images.sm,
      }));

      setArenaData(playersData);
    }
  }, [arenaPlayers]);

  return { playerIds, arenaData };
};

export default useArenaData;
