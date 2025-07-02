"use client";

import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, RefreshCw } from 'lucide-react';

interface ApiLimitOverlayProps {
    isBackendLimitExceeded: boolean;
}

export const ApiLimitOverlay = ({ isBackendLimitExceeded }: ApiLimitOverlayProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isBackendLimitExceeded) {
            setIsVisible(true);
        }
    }, [isBackendLimitExceeded]);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-lg w-full mx-4 relative transform transition-all duration-300 ease-out">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <X size={24} />
                </button>
                <div className="p-8 text-center">
                    <div className="mx-auto flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full mb-6">
                        <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        API Limit Exceeded
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Sorry, all API key limits have been exceeded. Please try again later.
                    </p>
                    <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
                        <p className="text-sm text-red-700 dark:text-red-300">
                            This affects all AI-powered features on the platform. I apologize for the inconvenience.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={handleClose}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
                        >
                            <RefreshCw size={16} />
                            Continue to Dashboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};