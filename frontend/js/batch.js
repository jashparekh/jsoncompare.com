import MK from 'matreshka';
import BatchItem from './batch-item';

export default class BatchTab extends MK.Array {
	Model = BatchItem;
	itemRenderer = ':sandbox .renderer';
	constructor(data, parent) {
		super(...data)
			.bindNode({
				sandbox: parent.nodes.sandbox,
				container: parent.nodes.content
			})
			.recreate(data, {
				dontRender: true
			})
			.on({
				'click::(.add)': evt => {
					this.push({});
				},
				'*@click::deleteButton': evt => {
					this.pull(evt.self);
				}
			});
	}
}
