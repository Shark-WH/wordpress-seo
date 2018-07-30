/* global wp */

import React from "react";
import PropTypes from "prop-types";
import { Provider as StoreProvider } from "react-redux";

import SidebarItem from "./SidebarItem";
import ReadabilityAnalysis from "./contentAnalysis/ReadabilityAnalysis";
import CollapsibleCornerstone from "../containers/CollapsibleCornerstone";

/**
 * Creates the Sidebar component.
 *
 * @param {bool} isContentAnalysisActive Whether or not the readability analysis is active.
 * @param {bool} isKeywordAnalysisActive Whether or not the readability analysis is active.
 * @param {bool} isCornerstoneActive     Whether or not the cornerstone content feature is active.
 * @param {bool} isCornerstone           Whether or not the cornerstone content checkbox is checked.
 * @param {Object} store                 The store.
 *
 * @returns {ReactElement} The Sidebar component.
 *
 * @constructor
 */
export default function Sidebar( { isContentAnalysisActive, isKeywordAnalysisActive, isCornerstoneActive, isCornerstone, store  } ) {
	const { Fill } = wp.components;

	return (
		<Fill name="YoastSidebar">
			{ isContentAnalysisActive && <SidebarItem renderPriority={ 10 }>
				<StoreProvider store={ store } >
					<ReadabilityAnalysis />
				</StoreProvider>
			</SidebarItem> }
			{ isKeywordAnalysisActive && <SidebarItem renderPriority={ 20 }>SEO analysis</SidebarItem> }
			{ isCornerstoneActive && <SidebarItem renderPriority={ 30 }>
				<StoreProvider store={ store }>
					<CollapsibleCornerstone isCornerstone={ isCornerstone }/>
				</StoreProvider>
			</SidebarItem>
			}
		</Fill>
	);
}

Sidebar.propTypes = {
	isContentAnalysisActive: PropTypes.bool,
	isKeywordAnalysisActive: PropTypes.bool,
	isCornerstoneActive: PropTypes.bool,
	isCornerstone: PropTypes.bool,
	store: PropTypes.object,
};
