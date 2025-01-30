class EmailGenerator {
    static generateEmailString() {
        const date = new Date();
        const formattedDate = date.toISOString().replace(/[-:.]/g, '').split('T')[0];
        const timeString = date.toTimeString().split(' ')[0].replace(/:/g, '');
        return `test_${formattedDate}_${timeString}`;
    }
}

module.exports = EmailGenerator;