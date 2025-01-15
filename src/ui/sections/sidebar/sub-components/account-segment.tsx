import SettingsIcon from "../../../components/icons/settings-icon";
import LinkWithHideableTag from "../../../components/common/link-with-hideable-tag";
import LogoIcon from "../../../components/icons/logo-icon";
const AccountSegment = () => {
  return (
    <div className="flex flex-col space-y-5">
      <LinkWithHideableTag Icon={SettingsIcon} text="Settings" url="/" />
      <div className="transform -translate-x-0.5">
        <LogoIcon scale={0.9} color="#3f3f46" />
      </div>
    </div>
  );
};

export default AccountSegment;
