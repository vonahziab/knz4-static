import React, { createContext, FC, useContext } from 'react';

interface ILanguageContext {
	language: ILanguageObject;
	setLanguage: React.Dispatch<React.SetStateAction<ILanguageObject>>;
}

export interface ILanguageOptions {
	defaultValue: ILanguageObject;
	persisted?: boolean;
	languages?: ILanguageObject[];
	children?: any;
}

export interface ILanguageObject {
	title: string;
	description: string;
	value: string;
	words?: Record<string, string>;
}

export const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	return context;
};

export const LanguageProvider: FC<ILanguageOptions> = ({
	defaultValue,
	persisted,
	languages,
	children,
}) => {
	const [language, setLanguage] = React.useState<ILanguageObject>(() => {
		if (persisted) {
			const storageValue = localStorage.getItem('application_language');

			if (storageValue) {
				return languages!.filter(lang => lang.value === JSON.parse(storageValue))[0];
			} else {
				return defaultValue;
			}
		} else {
			return defaultValue;
		}
	});

	React.useEffect(() => {
		if (persisted) {
			localStorage.setItem('application_language', JSON.stringify(language.value));
		}
	}, [language, persisted]);

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
