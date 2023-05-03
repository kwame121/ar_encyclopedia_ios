
import TrackerDetails from './TrackerDetails';
import Contents from '../Ar/Contents';
import PortalSheet from '../Ar/ArPortals/PortalSheet';
import OptionSheet from '../Ar/OptionSheet';
import { registerSheet } from 'react-native-actions-sheet';
import PortalPreviewSheet from '../Ar/ArPortals/PortalPreviewSheet';


registerSheet('trackerDetails',TrackerDetails);
registerSheet('contents',Contents);
registerSheet('portalSheet',PortalSheet);
registerSheet('optionSheet',OptionSheet);
registerSheet('portalPreviewSheet',PortalPreviewSheet);

export {};

