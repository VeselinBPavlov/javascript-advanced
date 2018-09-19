let components = require('../Computer/computer').createComputerHierarchy;

function createMixins() {
    function computerQualityMixin(components) {
        components.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };
        components.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        };
        components.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    }

    function styleMixin(components) {
        components.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer
                && this.manufacturer === this.monitor.manufacturer;
        };
        components.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 && (this.color === 'Silver' || this.color === 'Black') && this.weight < 3;
        }
    }

    return { computerQualityMixin, styleMixin }
}