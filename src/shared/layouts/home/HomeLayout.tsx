import { AboutTeam } from "./AboutTeam"
import { FeaturedMoments } from "./FeaturedMoments"
import { HeroBanner } from "./HeroBanner"
import { HomeGallery } from "./HomeGallery"
import { TeamIdentity } from "./TeamIdentity"

export function HomeLayout() {
    return (
        <div className="bg-white text-[#0F2145]">
            <HeroBanner />
            <AboutTeam />
            <TeamIdentity />
            <FeaturedMoments />
            <HomeGallery />
        </div>
    )
}
