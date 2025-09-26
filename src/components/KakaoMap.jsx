import { useEffect } from "react";

export default function KakaoMap() {
  useEffect(() => {
    // SDK 스크립트 로드
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAP_API_KEY
    }&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        if (!container) return;

        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 서울
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        // ✅ 마커 예시
        new window.kakao.maps.Marker({
          map,
          position: new window.kakao.maps.LatLng(37.5665, 126.978),
        });
      });
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }} />;
}
