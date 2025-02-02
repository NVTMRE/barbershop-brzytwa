import {NavItems} from "@/config/nav-items";
import {NavItemsType} from "@/types/nav-items";

type SplittedNavItemsType = {
    firstPart: NavItemsType;
    secondPart: NavItemsType;
}

export const useSplittedNavItems: () => SplittedNavItemsType = () : SplittedNavItemsType => {
    const middleIndex = Math.ceil(NavItems.length / 2);
    const firstPart = NavItems.slice(0, middleIndex);
    const secondPart = NavItems.slice(middleIndex);

    return {
        firstPart,
        secondPart
    };
}