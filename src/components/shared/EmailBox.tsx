import {LetterIcon} from "@/components/ui/icons/LetterIcon";
import {IconButton} from "@/components/ui/IconButton";
import {MailSubmitIcon} from "@/components/ui/icons/MailSubmitIcon";

export const EmailBox = ({
                                  variant = 'full',
                                  className = '',
                                  ...props
                              }) => {

    if (variant === 'full') {
        return (
            <div className={`${className}`} {...props}>
                <div className="flex items-center bg-white rounded-lg shadow-lg p-2 max-w-lg mx-auto">
                    <div className="flex items-center pl-4 pr-2">
                        <LetterIcon/>
                    </div>
                    <input
                        type="email"
                        placeholder={"Enter your email"}
                        className="flex-1 px-2 py-3 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none text-base font-dm-sans font-light"
                    />
                    <button
                        className="bg-[var(--button)] hover:bg-orange-500 text-white px-4 md:px-6 lg:px-8 py-3 rounded-lg font-dm-sans font-medium transition-colors duration-200"
                    >
                        Register
                    </button>
                </div>
            </div>
        );
    }

    if (variant === 'compact') {
        return (
            <div className={`${className}`} {...props}>
                <div className="flex items-center bg-white rounded-lg max-w-sm mx-auto">
                    <input
                        type="email"
                        placeholder={"Email Address"}
                        className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none text-base"
                    />
                    <IconButton
                        icon={<MailSubmitIcon className="text-[var(--button)]"/>}
                        aria-label="Submit email address"
                        className="pr-3 flex-shrink-0"
                    />
                </div>
            </div>
        );
    }

    return null;
};