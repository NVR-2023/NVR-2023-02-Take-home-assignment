import SettingsIcon from "../../../components/icons/settings-icon";
import LinkWithHideableTag from "../../../components/common/link-with-hideable-tag";

const SettingsSegment = () => {
  return (
    <div className="flex flex-col space-y-5">
      <LinkWithHideableTag Icon={SettingsIcon} text="Settings" url="/" />
    </div>
  );
};

export default SettingsSegment;
