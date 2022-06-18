import { RoadmapItemProps } from "../interfaces/pages";

export const roadMapItems: RoadmapItemProps[] = [
    {
        step: 'Phase 01',
        date: 'Q1 / 2022',
        active: true,
        description:[
            'Website Release',
            'Social Media',
            'Teaser & Roadmap',
            'Whitepaper Release'
        ]
    },
    {
        step: 'Phase 02',
        date: 'Q3 / 2022',
        active: false,
        description:[
            'Website Full Features',
            'Grandora (GANDO) Token Private Sales',
            'Grandora (GANDO) Token Public Sales and Listing',
            '1st: Land Private Sale'
        ]
    },
    {
        step: 'Phase 03',
        date: 'Q1 / 2023',
        active: false,
        description:[
            '1st Lands Public Sales',
            'Staking Program',
            'Central Hub',
            'Personal Space',
            'Attraction site',
            'Exchange NFT`s'
        ]
    },    
    {
        step: 'Phase 04',
        date: 'Q4 / 2023',
        active: false,
        description:[
            'Dungeon Hub',
            'Farming System',
            'Event in Attraction Site',
            'Item Exchange System',
            'Creative Space',
            'Content/Game in Creative Space'
        ]
    }
];